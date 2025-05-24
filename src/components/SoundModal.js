import React, { useEffect, useRef } from 'react';
import { useSounds } from '../context/SoundContext';

const SoundModal = ({ isOpen, onClose, title, content }) => {
    const { playOpen, playClose } = useSounds();
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            playOpen();
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, playOpen]);

    const handleClose = () => {
        playClose();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-modal-enter"
            >
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 opacity-75"
                        aria-label="Close modal"
                    >
                        <i className='bx bx-x text-xl'></i>
                    </button>
                </div>
                <div className="p-6">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default SoundModal; 