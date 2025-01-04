import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">WELCOME!</h1>
          <p className="text-gray-600">Please sign in to see the magic</p>
        </div>

        <LoginForm onSubmit={handleLogin} />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}