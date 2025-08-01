import React, { useState } from 'react';
import { Card, Button, Input, Modal } from '../components/UI';
import { useAuth } from '../hooks/redux';
import { formatCurrency, formatDate } from '../utils';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isTwoFactorModalOpen, setIsTwoFactorModalOpen] = useState(false);

  // Mock user data
  const userData = {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
    },
    preferences: {
      currency: 'USD',
      language: 'English',
      timezone: 'America/New_York',
      emailNotifications: true,
      smsNotifications: false,
      marketAlerts: true,
      priceAlerts: true,
    },
    security: {
      twoFactorEnabled: false,
      lastPasswordChange: '2024-01-01T00:00:00Z',
      loginSessions: [
        {
          id: '1',
          device: 'MacBook Pro',
          location: 'New York, NY',
          lastActive: '2024-01-15T14:30:00Z',
          current: true,
        },
        {
          id: '2',
          device: 'iPhone 15',
          location: 'New York, NY',
          lastActive: '2024-01-15T10:15:00Z',
          current: false,
        },
      ],
    },
    verification: {
      emailVerified: true,
      phoneVerified: false,
      identityVerified: true,
      kycStatus: 'approved',
    },
  };

  const [profileForm, setProfileForm] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
    dateOfBirth: userData.dateOfBirth,
    street: userData.address.street,
    city: userData.address.city,
    state: userData.address.state,
    zipCode: userData.address.zipCode,
    country: userData.address.country,
  });

  const [preferencesForm, setPreferencesForm] = useState(userData.preferences);

  const tabs = [
    { id: 'profile', name: 'Profile Information', icon: '👤' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'verification', name: 'Verification', icon: '✅' },
  ];

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', profileForm);
    setIsEditingProfile(false);
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle preferences update
    console.log('Preferences updated:', preferencesForm);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <Card title="Personal Information">
        <form onSubmit={handleProfileSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              value={profileForm.firstName}
              onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
              disabled={!isEditingProfile}
              required
            />
            <Input
              label="Last Name"
              value={profileForm.lastName}
              onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
              disabled={!isEditingProfile}
              required
            />
            <Input
              label="Email"
              type="email"
              value={userData.email}
              disabled
              className="md:col-span-2"
            />
            <Input
              label="Phone Number"
              value={profileForm.phone}
              onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
              disabled={!isEditingProfile}
            />
            <Input
              label="Date of Birth"
              type="date"
              value={profileForm.dateOfBirth}
              onChange={(e) => setProfileForm({ ...profileForm, dateOfBirth: e.target.value })}
              disabled={!isEditingProfile}
            />
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Street Address"
                value={profileForm.street}
                onChange={(e) => setProfileForm({ ...profileForm, street: e.target.value })}
                disabled={!isEditingProfile}
                className="md:col-span-2"
              />
              <Input
                label="City"
                value={profileForm.city}
                onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                disabled={!isEditingProfile}
              />
              <Input
                label="State/Province"
                value={profileForm.state}
                onChange={(e) => setProfileForm({ ...profileForm, state: e.target.value })}
                disabled={!isEditingProfile}
              />
              <Input
                label="ZIP/Postal Code"
                value={profileForm.zipCode}
                onChange={(e) => setProfileForm({ ...profileForm, zipCode: e.target.value })}
                disabled={!isEditingProfile}
              />
              <Input
                label="Country"
                value={profileForm.country}
                onChange={(e) => setProfileForm({ ...profileForm, country: e.target.value })}
                disabled={!isEditingProfile}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            {isEditingProfile ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditingProfile(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                type="button"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <Card title="General Preferences">
        <form onSubmit={handlePreferencesSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Currency
              </label>
              <select
                value={preferencesForm.currency}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, currency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CAD">CAD - Canadian Dollar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select
                value={preferencesForm.language}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, language: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="German">Deutsch</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timezone
              </label>
              <select
                value={preferencesForm.timezone}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, timezone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notifications</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive account updates and news via email
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferencesForm.emailNotifications}
                  onChange={(e) => setPreferencesForm({ ...preferencesForm, emailNotifications: e.target.checked })}
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    SMS Notifications
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive important alerts via SMS
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferencesForm.smsNotifications}
                  onChange={(e) => setPreferencesForm({ ...preferencesForm, smsNotifications: e.target.checked })}
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Market Alerts
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified about significant market movements
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferencesForm.marketAlerts}
                  onChange={(e) => setPreferencesForm({ ...preferencesForm, marketAlerts: e.target.checked })}
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Price Alerts
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive notifications when prices reach your targets
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferencesForm.priceAlerts}
                  onChange={(e) => setPreferencesForm({ ...preferencesForm, priceAlerts: e.target.checked })}
                  className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button type="submit">
              Save Preferences
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <Card title="Password & Authentication">
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Password</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last changed: {formatDate(userData.security.lastPasswordChange)}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsChangePasswordModalOpen(true)}
            >
              Change Password
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {userData.security.twoFactorEnabled ? 'Enabled' : 'Add an extra layer of security'}
              </p>
            </div>
            <Button
              variant={userData.security.twoFactorEnabled ? 'outline' : 'primary'}
              onClick={() => setIsTwoFactorModalOpen(true)}
            >
              {userData.security.twoFactorEnabled ? 'Manage' : 'Enable'}
            </Button>
          </div>
        </div>
      </Card>

      <Card title="Active Sessions">
        <div className="space-y-4">
          {userData.security.loginSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-lg">
                    {session.device.includes('iPhone') ? '📱' : '💻'}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {session.device}
                    {session.current && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                        Current
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {session.location} • Last active: {formatDate(session.lastActive, 'time')}
                  </p>
                </div>
              </div>
              {!session.current && (
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderVerificationTab = () => (
    <div className="space-y-6">
      <Card title="Account Verification">
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                userData.verification.emailVerified 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                {userData.verification.emailVerified ? '✓' : '!'}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email Verification</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {userData.verification.emailVerified ? 'Verified' : 'Pending verification'}
                </p>
              </div>
            </div>
            {!userData.verification.emailVerified && (
              <Button variant="outline" size="sm">
                Verify Email
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                userData.verification.phoneVerified 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                {userData.verification.phoneVerified ? '✓' : '!'}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Phone Verification</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {userData.verification.phoneVerified ? 'Verified' : 'Pending verification'}
                </p>
              </div>
            </div>
            {!userData.verification.phoneVerified && (
              <Button variant="outline" size="sm">
                Verify Phone
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                userData.verification.identityVerified 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                {userData.verification.identityVerified ? '✓' : '!'}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Identity Verification</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  KYC Status: {userData.verification.kycStatus.charAt(0).toUpperCase() + userData.verification.kycStatus.slice(1)}
                </p>
              </div>
            </div>
            {!userData.verification.identityVerified && (
              <Button variant="outline" size="sm">
                Complete KYC
              </Button>
            )}
          </div>
        </div>
      </Card>

      <Card title="Trading Limits">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Daily Limit</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatCurrency(50000)}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gold-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {formatCurrency(12500)} used today
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Monthly Limit</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatCurrency(500000)}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gold-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {formatCurrency(225000)} used this month
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Account Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account information and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-gold-500 text-gold-600 dark:text-gold-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && renderProfileTab()}
      {activeTab === 'preferences' && renderPreferencesTab()}
      {activeTab === 'security' && renderSecurityTab()}
      {activeTab === 'verification' && renderVerificationTab()}

      {/* Change Password Modal */}
      <Modal
        isOpen={isChangePasswordModalOpen}
        onClose={() => setIsChangePasswordModalOpen(false)}
        title="Change Password"
      >
        <form className="space-y-4">
          <Input
            label="Current Password"
            type="password"
            required
          />
          <Input
            label="New Password"
            type="password"
            required
          />
          <Input
            label="Confirm New Password"
            type="password"
            required
          />
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsChangePasswordModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Update Password
            </Button>
          </div>
        </form>
      </Modal>

      {/* Two-Factor Authentication Modal */}
      <Modal
        isOpen={isTwoFactorModalOpen}
        onClose={() => setIsTwoFactorModalOpen(false)}
        title="Two-Factor Authentication"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {userData.security.twoFactorEnabled
              ? 'Two-factor authentication is currently enabled for your account.'
              : 'Add an extra layer of security to your account by enabling two-factor authentication.'}
          </p>
          
          {!userData.security.twoFactorEnabled ? (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
                  Setup Instructions
                </h4>
                <ol className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>1. Download an authenticator app (Google Authenticator, Authy, etc.)</li>
                  <li>2. Scan the QR code below with your app</li>
                  <li>3. Enter the 6-digit code from your app</li>
                </ol>
              </div>
              
              <div className="flex justify-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">QR Code</span>
                </div>
              </div>
              
              <Input
                label="Verification Code"
                placeholder="Enter 6-digit code"
                maxLength={6}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-400">
                  Two-factor authentication is protecting your account.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Disable Two-Factor Authentication
              </Button>
            </div>
          )}
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsTwoFactorModalOpen(false)}
            >
              Cancel
            </Button>
            <Button>
              {userData.security.twoFactorEnabled ? 'Save Changes' : 'Enable 2FA'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;