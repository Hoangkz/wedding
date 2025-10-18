'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignupPage() {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [shortName, setShortName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, password, name, shortName }),
            });
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || 'Tạo tài khoản thất bại');
                setLoading(false);
                return;
            }

            toast.success('Tạo tài khoản thành công! Bạn có thể đăng nhập.');
            setuserName('');
            setPassword('');
            setName('');
            setShortName('');
        } catch {
            toast.error('Lỗi server!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-[350px] flex flex-col gap-3"
            >
                <h2 className="text-xl font-bold text-center mb-4">Tạo Tài Khoản</h2>

                <input
                    type="text"
                    placeholder="Họ tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Tên gọi ngắn"
                    value={shortName}
                    onChange={(e) => setShortName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    {loading ? 'Đang tạo...' : 'Tạo tài khoản'}
                </button>
            </form>
        </div>
    );
}
