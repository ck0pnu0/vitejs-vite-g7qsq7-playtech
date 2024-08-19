import './LoadButton.css';

interface LoadButtonType {
  disabled: boolean;
  onClick: () => void;
}

export default function LoadButton({ disabled, onClick }: LoadButtonType) {
  return (
    <button className={disabled ? 'hidden' : ''} onClick={onClick}>
      Load more
    </button>
  );
}
