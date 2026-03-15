<script setup>
    import axios from "axios";
    import {
        ref,
        onMounted
    } from "vue";

    // Deklarasi variabel
    const api = "http://localhost:3000/api/categories";
    const categories = ref([]);
    const showAddCategories = ref(false);
    const showEditCategories = ref(false);
    const category_code = ref("");
    const category_name = ref("");
    const selectedId = ref(null);

    const getCategories = async () => {
        try {
            const response = await axios.get(api);
            categories.value = response.data.data;
            console.log("Data fetched:", response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    onMounted(() => {
        getCategories();
    });

    const addCategories = async () => {
        try {
            const response = await axios.post(api, {
                category_code: category_code.value,
                category_name: category_name.value,
            });
            categories.value.push(response.data.data);
            closeForm();
        } catch (error) {
            console.error("Error adding categories:", error);
        }
    }

    const openEditForm = (category) => {
        selectedId.value = category.id;
        category_code.value = category.category_code;
        category_name.value = category.category_name;
        showEditCategories.value = true;
    }

    const closeForm = () => {
        showAddCategories.value = false;
        showEditCategories.value = false;
        category_code.value = "";
        category_name.value = "";
        selectedId.value = null;
    }

    const editCategories = async (id) => {
        try {
            await axios.put(`${api}/${id}`, {
                category_code: category_code.value,
                category_name: category_name.value,
            });
            await getCategories();
            closeForm();
        } catch (error) {
            console.error("Error editing categories:", error);
        }
    }

    const deleteCategories = async (id) => {
        try {
            if (confirm("Apakah anda yakin ingin menghapus ini?")) {
                await axios.delete(`${api}/${id}`);
                await getCategories();
            }
        } catch (error) {
            console.error("Error deleting categories:", error);
        }
    }
</script>

<template>
    <div class="container">
        <h1>Categories</h1>
        <button class="add-btn" @click="showAddCategories = true">Add Category</button>
        <div v-if="categories.length === 0" class="loading">Loading data...</div>
        <ul v-else>
            <li v-for="(category, index) in categories" :key="category.id">
                <div class="category-info">
                    <span>{{ index + 1 }}</span>
                    <span class="code">{{ category.category_code }}</span>
                    <span class="name">{{ category.category_name }}</span>
                </div>
                <div class="actions">
                    <button class="edit-btn" @click="openEditForm(category)">Edit</button>
                    <button class="delete-btn" @click="deleteCategories(category.id)">Delete</button>
                </div>
            </li>
        </ul>
    </div>

    <!-- Section add and categories -->
    <div class="modal" v-if="showAddCategories">
        <div class="modal-content">
            <h2>Add Category</h2>
            <form @submit.prevent="addCategories">
                <div class="form-group">
                    <label>Category Code</label>
                    <input type="text" v-model="category_code" placeholder="CT001">
                </div>
                <div class="form-group">
                    <label>Category Name</label>
                    <input type="text" v-model="category_name" placeholder="Nama Kategori">
                </div>
                <div class="modal-actions">
                    <button type="submit" class="save-btn">Save</button>
                    <button type="button" class="cancel-btn" @click="closeForm">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Section edit categories -->
    <div class="modal" v-if="showEditCategories">
        <div class="modal-content">
            <h2>Edit Category</h2>
            <form @submit.prevent="editCategories(selectedId)">
                <div class="form-group">
                    <label>Category Code</label>
                    <input type="text" v-model="category_code" placeholder="CT001">
                </div>
                <div class="form-group">
                    <label>Category Name</label>
                    <input type="text" v-model="category_name" placeholder="Nama Kategori">
                </div>
                <div class="modal-actions">
                    <button type="submit" class="save-btn">Update</button>
                    <button type="button" class="cancel-btn" @click="closeForm">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        font-family: 'Inter', sans-serif;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    }

    h1 {
        color: #1f2937;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .add-btn {
        background: #4f46e5;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        margin-bottom: 1.5rem;
    }

    .add-btn:hover {
        background: #4338ca;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        background: #f9fafb;
        margin: 0.75rem 0;
        padding: 1.25rem;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s;
    }

    li:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-color: #d1d5db;
    }

    .category-info {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .code {
        font-weight: 700;
        color: #4f46e5;
        background: #eef2ff;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-family: monospace;
        letter-spacing: 0.05em;
    }

    .name {
        color: #374151;
        font-weight: 500;
        font-size: 1.1rem;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
    }

    .edit-btn, .delete-btn {
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .edit-btn {
        background: #f3f4f6;
        color: #4b5563;
        border: 1px solid #d1d5db;
    }

    .edit-btn:hover {
        background: #e5e7eb;
        color: #1f2937;
    }

    .delete-btn {
        background: #fee2e2;
        color: #dc2626;
        border: 1px solid #fecaca;
    }

    .delete-btn:hover {
        background: #fecaca;
        color: #b91c1c;
    }

    /* Modal Backdrop */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(4px);
    }

    /* Modal Content */
    .modal-content {
        background: white;
        padding: 2.5rem;
        border-radius: 16px;
        width: 100%;
        max-width: 450px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .modal-content h2 {
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: #111827;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #4b5563;
    }

    .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .form-group input:focus {
        outline: none;
        border-color: #4f46e5;
        box-shadow: 0 0 0 4px #eef2ff;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 2rem;
    }

    .save-btn {
        background: #4f46e5;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
    }

    .cancel-btn {
        background: white;
        color: #4b5563;
        border: 1px solid #d1d5db;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
    }

    .loading {
        text-align: center;
        padding: 3rem;
        color: #6b7280;
        font-style: italic;
    }
</style>
