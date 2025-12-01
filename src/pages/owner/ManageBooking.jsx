import React, { useEffect, useState } from 'react';
import { dummyMyBookingsData, assets } from '../../assets/assets';
import Title from '../../components/owner/Title';

const ManageBookings = () => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [bookings, setBookings] = useState([]);

    const fetchOwnerBookings = async () => {
        setBookings(dummyMyBookingsData);
    };

    useEffect(() => {
        fetchOwnerBookings();
    }, []);

    return (
        <div className='px-4 pt-10 md:px-10 w-full'>
            <Title
                title="Manage Bookings"
                subTitle="View all bookings made by customers, update their status, or remove them if necessary."
            />

            <div className='max-w-4xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
                <table className='w-full border-collapse text-left text-sm text-gray-600'>
                    <thead className='text-gray-500'>
                        <tr>
                            <th className="p-3 font-medium">Car</th>
                            <th className="p-3 font-medium max-md:hidden">User</th>
                            <th className="p-3 font-medium">Price</th>
                            <th className="p-3 font-medium max-md:hidden">Status</th>
                            <th className="p-3 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className='border-t border-borderColor'>
                                {/* Car Info */}
                                <td className='p-3 flex items-center gap-3'>
                                    <img
                                        src={booking.car.image}
                                        alt=""
                                        className='h-12 w-12 aspect-square rounded-md object-cover'
                                    />
                                    <div className='max-md:hidden'>
                                        <p className='font-medium'>{booking.car.brand} {booking.car.model}</p>
                                        <p className='text-xs text-gray-500'>
                                            {booking.car.seating_capacity} • {booking.car.transmission}
                                        </p>
                                    </div>
                                </td>

                                {/* User */}
                                <td className='p-3 max-md:hidden'>{booking.user}</td>

                                {/* Price */}
                                <td className='p-3'>
                                    {currency}{booking.price}
                                </td>

                                {/* Status */}
                                <td className='p-3 max-md:hidden'>
                                    <span className={`px-3 py-1 rounded-full text-xs ${
                                        booking.status === 'confirmed' ? 'bg-green-100 text-green-500' :
                                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-500' :
                                        'bg-red-100 text-red-500'
                                    }`}>
                                        {booking.status}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className='flex items-center gap-4 p-3'>
                                    {/* View / Hide icon */}
                                    <img
                                        src={assets.eye_icon}
                                        alt="view"
                                        className='cursor-pointer h-8 w-8'
                                    />
                                    {/* Delete icon */}
                                    <img
                                        src={assets.delete_icon}
                                        alt="delete"
                                        className='cursor-pointer h-8 w-8'
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookings;
