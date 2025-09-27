import Card from "@/components/common/Card";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
export interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostProps {
  title: string;
  body: string;
  userId: number;
}

export interface UserCardProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}