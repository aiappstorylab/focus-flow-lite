import { useEffect } from 'react';
import './NotificationModal.css';

const NotificationModal = ({ isOpen, onClose, type, message }) => {
    useEffect(() => {
        if (isOpen) {
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const isWorkComplete = type === 'work';
    const emoji = isWorkComplete ? '🎉' : '⏰';
    const title = isWorkComplete ? '집중 세션 완료!' : '휴식 시간 종료!';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-emoji">{emoji}</div>
                <h2 className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <button className="modal-button" onClick={onClose}>
                    확인
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;
