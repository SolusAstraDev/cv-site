import React, { useCallback, useEffect, useRef } from 'react';
import { useSounds } from '../context/SoundContext';

const SoundModal = ({ isOpen, onClose, title, content }) => {
    const { playOpen, playClose } = useSounds();
    const modalRef = useRef(null);

    const handleClose = useCallback(() => {
        playClose();
        onClose();
    }, [playClose, onClose]);

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
    }, [isOpen, playOpen, handleClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="bg-[var(--bg-elev)] border border-[var(--border)] text-[var(--text)] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-modal-enter shadow-[var(--shadow)]"
            >
                <div className="sticky top-0 bg-[var(--bg-elev)]/95 backdrop-blur p-6 border-b border-[var(--border)] flex justify-between items-center">
                    <h2 className="font-display text-2xl font-bold">{title}</h2>
                    <button
                        onClick={handleClose}
                        className="w-9 h-9 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
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