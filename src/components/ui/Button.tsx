import "./button.scss";

interface Props {
  children: React.ReactNode;
  variant?: string;
  onClick?: () => void;
}

export default function Button({ children, variant, onClick }: Props) {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
