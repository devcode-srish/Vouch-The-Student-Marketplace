'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bell, User, Palette, KeyRound, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSaveChanges = (section: string) => {
    toast({
      title: '✅ Settings Saved',
      description: `Your ${section} settings have been updated.`,
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account and site preferences.
        </p>
      </header>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                <span>Dark Mode</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Embrace the dark side.
                </span>
              </Label>
              <Switch
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <User className="h-6 w-6" />
              <CardTitle>Profile</CardTitle>
            </div>
            <CardDescription>
              This is how others will see you on the site.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="avatar">Avatar Image</Label>
                <Input id="avatar" type="file" />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button onClick={() => handleSaveChanges('profile')}>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Choose how you want to be notified.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                <span>Email Notifications</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Receive emails about new messages and offers.
                </span>
              </Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
             <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
                <span>Push Notifications</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Get push notifications on your devices.
                </span>
              </Label>
              <Switch id="push-notifications" />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button onClick={() => handleSaveChanges('notification')}>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <KeyRound className="h-6 w-6" />
              <CardTitle>Account Management</CardTitle>
            </div>
            <CardDescription>
              Manage your password and account settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4 flex justify-between">
            <Button onClick={() => handleSaveChanges('password')}>Update Password</Button>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                <LogOut className="mr-2 h-4 w-4"/>
                Logout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
