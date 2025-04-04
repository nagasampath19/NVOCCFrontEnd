import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from './Grid';

const AddressComponent = ({ header, name, address, email, phone, apiUrl, onSave }) => {
    const [formData, setFormData] = useState({ header, name: name || '', address: address || '', email: email || '', phone: phone || '' });
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (data.length === 0) {
            console.log("No data available");
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name?.trim()) {
            newErrors.name = 'Name is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        try {
            const response = await axios.post(apiUrl, formData);
            console.log('Data saved:', response.data);
            setData([...data, formData]);
            setFormData({ header, name: '', address: '', email: '', phone: '' });
            if (onSave) onSave(response.data); // Notify parent component
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleEdit = (row) => {
        setFormData(row);
    };

    const handleDelete = (row) => {
        setData(data.filter((item) => item !== row));
    };

    const columns = [
        { name: 'name', label: 'Name' },
        { name: 'address', label: 'Address' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Phone' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>{formData.header}</h2>
            <div>
                <label htmlFor='name' className={errors.name ? 'error' : ''}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                />
                <span style={{ color: 'red', display: 'block', textAlign: 'left' }}>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </span>
            </div>
            <div>
                <label>Address</label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleSubmit}>Save</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Grid
                    columns={columns}
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default AddressComponent;
