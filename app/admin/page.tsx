'use client';
import { appWeddingClient } from '@/lib/ApiClient';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function AdminPage() {
    type AdminUser = {
        token?: string;
        id?: string;
        email?: string;
        name?: string;
    } | null;
    const [user, setUser] = useState<AdminUser>(null);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    // Kiểm tra login khi render
    useEffect(() => {
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('token='))
            ?.split('=')[1];
        if (!token) {
            setShowModal(true);
        } else {
            setUser({ token });
        }
    }, []);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        try {
            await appWeddingClient.login(email, password)
            toast.success('Đăng nhập thành công!');

        } catch (data) {
            setError(data.error || 'Đăng nhập thất bại!');
            toast.error(data.error || 'Đăng nhập thất bại!');

        }
    };

    if (!user && !showModal) return null; // chờ kiểm tra login

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            {user && (
                <div>
                    <p>Welcome, admin!</p>
                    {/* Nội dung quản trị, CRUD customer, wish, wedding info */}
                </div>
            )}

            {/* Modal đăng nhập */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded shadow-md w-[300px]">
                        <h2 className="text-lg font-bold mb-4">Admin Login</h2>
                        <form onSubmit={handleLogin} className="flex flex-col">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="border p-2 w-full mb-2"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="border p-2 w-full mb-2"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white w-full p-2 rounded"
                            >
                                Login
                            </button>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
