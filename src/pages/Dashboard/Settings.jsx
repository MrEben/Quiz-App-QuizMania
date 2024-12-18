import React, { useState } from "react";
import { Bell, User, CreditCard, Shield } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [buttonLabel, setButtonLabel] = useState("Save Changes");

  const [notificationSettings, setNotificationSettings] = useState({
    emailUpdates: true,
    quizResults: true,
    newParticipants: false,
    marketingEmails: false,
  });

  const handleNotificationChange = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex gap-6">
        {/* Settings Navigation */}
        <div className="w-64">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <nav className="flex flex-col">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium border-l-2 ${
                  activeTab === "profile"
                    ? "border-purple-500 text-purple-600 bg-purple-50"
                    : "border-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                <User size={20} />
                <span>Profile</span>
              </button>

              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium border-l-2 ${
                  activeTab === "notifications"
                    ? "border-purple-500 text-purple-600 bg-purple-50"
                    : "border-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Bell size={20} />
                <span>Notifications</span>
              </button>

              <button
                onClick={() => setActiveTab("privacy")}
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium border-l-2 ${
                  activeTab === "privacy"
                    ? "border-purple-500 text-purple-600 bg-purple-50"
                    : "border-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Shield size={20} />
                <span>Privacy & Security</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Settings
                </h2>
                <p className="text-gray-600">
                  Update your personal information and customize your profile.
                </p>

                {/* Profile Form */}
                <div>
                  {/* Profile Picture */}
                  <div className="flex items-center space-x-4">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Profile"
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        Change Photo
                      </button>
                      <button className="ml-2 text-gray-600 text-sm hover:text-gray-900">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        defaultValue="Ebenezer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        defaultValue="Odame"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        defaultValue="aniagyei.odame@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Notification Preferences
                </h2>
                <p className="text-gray-600">
                  Manage how and when you receive notifications.
                </p>
                <div className="space-y-4">
                  {Object.keys(notificationSettings).map((setting) => (
                    <div
                      key={setting}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 capitalize">
                        {setting.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </span>
                      <button
                        onClick={() => handleNotificationChange(setting)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 ${
                          notificationSettings[setting]
                            ? "bg-purple-500"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                            notificationSettings[setting] ? "translate-x-4" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy & Security */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Privacy & Security
                </h2>
                <p className="text-gray-600">
                  Control your privacy settings and secure your account.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security to your account.
                    </p>
                    <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                      Enable 2FA
                    </button>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Account Activity
                    </h3>
                    <p className="text-sm text-gray-600">
                      Review recent account activity for suspicious behavior.
                    </p>
                    <button className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                      View Activity
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setButtonLabel("Saved!"); // Change the label to 'Saved!'
                    setTimeout(() => setButtonLabel("Save Changes"), 2000); // Revert to 'Save Changes' after 2 seconds
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    buttonLabel === "Saved!"
                      ? "bg-green-500 text-white"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
