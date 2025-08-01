import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Card } from '../components/UI';
import { useAppDispatch } from '../hooks/redux';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';
import { validateEmail, validatePassword } from '../utils';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be at least 18 years old';
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep1()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call to check email availability
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep(2);
    } catch (error) {
      setErrors({ email: 'This email is already registered' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call to register user
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsVerificationSent(true);
      setCurrentStep(3);
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length !== 6) {
      setErrors({ verification: 'Please enter a valid 6-digit code' });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call to verify email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration and login
      const mockUser = {
        id: '1',
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        role: 'registered' as const,
        createdAt: new Date().toISOString(),
      };

      const mockToken = 'mock-jwt-token-' + Date.now();
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      navigate('/');
    } catch (error) {
      setErrors({ verification: 'Invalid verification code. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const resendVerification = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to resend verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      setErrors({});
    } catch (error) {
      setErrors({ verification: 'Failed to resend verification code' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <Card className="p-6">
      <form onSubmit={handleStep1Submit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            placeholder="Enter your first name"
            required
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            placeholder="Enter your last name"
            required
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          placeholder="Enter your email address"
          required
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          error={errors.password}
          placeholder="Create a strong password"
          helperText="Must be at least 8 characters with uppercase, lowercase, number, and special character"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
          required
        />

        <Button
          type="submit"
          loading={isLoading}
          className="w-full"
        >
          Continue
        </Button>
      </form>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="p-6">
      <form onSubmit={handleStep2Submit} className="space-y-6">
        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          error={errors.phone}
          placeholder="+1 (555) 123-4567"
          required
        />

        <Input
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          error={errors.dateOfBirth}
          helperText="You must be at least 18 years old"
          required
        />

        <div className="space-y-4">
          <div className="flex items-start">
            <input
              id="agree-terms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="agree-terms" className="ml-3 text-sm text-gray-900 dark:text-gray-300">
              I agree to the{' '}
              <Link to="/terms" className="text-gold-600 hover:text-gold-500 dark:text-gold-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-gold-600 hover:text-gold-500 dark:text-gold-400">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.agreeToTerms}</p>
          )}

          <div className="flex items-start">
            <input
              id="agree-marketing"
              type="checkbox"
              checked={formData.agreeToMarketing}
              onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
              className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="agree-marketing" className="ml-3 text-sm text-gray-900 dark:text-gray-300">
              I would like to receive marketing communications and updates about Kimia Gold
            </label>
          </div>
        </div>

        {errors.general && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <div className="text-sm text-red-600 dark:text-red-400">
              {errors.general}
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep(1)}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            type="submit"
            loading={isLoading}
            className="flex-1"
          >
            Create Account
          </Button>
        </div>
      </form>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-gold-600 dark:text-gold-400">📧</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Verify your email
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          We've sent a 6-digit verification code to <strong>{formData.email}</strong>
        </p>
      </div>

      <form onSubmit={handleVerificationSubmit} className="space-y-6">
        <Input
          label="Verification Code"
          value={verificationCode}
          onChange={(e) => {
            setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6));
            if (errors.verification) {
              setErrors(prev => ({ ...prev, verification: '' }));
            }
          }}
          error={errors.verification}
          placeholder="Enter 6-digit code"
          maxLength={6}
          className="text-center text-2xl tracking-widest"
          required
        />

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Didn't receive the code?
          </p>
          <button
            type="button"
            onClick={resendVerification}
            disabled={isLoading}
            className="text-sm text-gold-600 hover:text-gold-500 dark:text-gold-400 dark:hover:text-gold-300 disabled:opacity-50"
          >
            Resend verification code
          </button>
        </div>

        <Button
          type="submit"
          loading={isLoading}
          className="w-full"
        >
          Verify & Complete Registration
        </Button>
      </form>
    </Card>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">K</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join Kimia Gold and start investing in precious metals
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step
                  ? 'bg-gold-600 text-white'
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                {currentStep > step ? '✓' : step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  currentStep > step
                    ? 'bg-gold-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Social Registration (only on step 1) */}
        {currentStep === 1 && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => console.log('Google registration')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => console.log('Apple registration')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </Button>
            </div>
          </>
        )}

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-gold-600 hover:text-gold-500 dark:text-gold-400 dark:hover:text-gold-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;