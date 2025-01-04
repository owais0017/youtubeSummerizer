import { LogOut } from 'lucide-react';

interface LogoutButtonProps {
  onLogout: () => void;
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <button
      onClick={onLogout}
      className="fixed top-4 right-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50 border border-gray-200 transition-colors"
      aria-label="Logout"
    >
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </button>
  );
}