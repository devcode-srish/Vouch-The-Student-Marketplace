
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
import { 
  Bell, 
  User, 
  Palette, 
  KeyRound, 
  LogOut, 
  ShieldCheck, 
  Trash2, 
  Globe, 
  Smartphone,
  CreditCard
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSaveChanges = (section: string) => {
    toast({
      title: '✅ Settings Saved',
      description: `Your ${section} settings have been updated.`,
    });
  };

  const handleClearCache = () => {
    toast({
      title: '🧹 Cache Cleared',
      description: 'The application cache has been purged.',
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold font-headline tracking-tight">Settings</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Manage your account, privacy, and community preferences.
        </p>
      </header>

      <div className="grid gap-10">
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Palette className="h-7 w-7 text-primary" />
              <CardTitle className="text-2xl font-headline">Appearance</CardTitle>
            </div>
            <CardDescription>
              Personalize how AlgoSwap looks on your device.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex flex-col space-y-1 cursor-pointer">
                <span className="text-lg font-semibold">Dark Mode</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Reduce eye strain and switch to a sleek neon aesthetic.
                </span>
              </Label>
              <Switch
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="language" className="flex flex-col space-y-1">
                <span className="text-lg font-semibold">Language</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Choose your preferred language for the interface.
                </span>
              </Label>
              <Select defaultValue="en">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English (US)</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
             <div className="flex items-center gap-3">
              <User className="h-7 w-7 text-primary" />
              <CardTitle className="text-2xl font-headline">Profile</CardTitle>
            </div>
            <CardDescription>
              Manage your public identity within the student community.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-md font-semibold">Username</Label>
                <Input id="username" defaultValue="johndoe_vit" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-md font-semibold">University Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@vit.edu.in" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="bio" className="text-md font-semibold">Short Bio</Label>
                <Input id="bio" placeholder="CSE Student | Tech Enthusiast" className="h-11" />
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/30 px-6 py-4">
            <Button onClick={() => handleSaveChanges('profile')} className="font-semibold px-8">Save Changes</Button>
          </CardFooter>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="h-7 w-7 text-primary" />
              <CardTitle className="text-2xl font-headline">Notifications</CardTitle>
            </div>
            <CardDescription>
              Control when and how you're notified about activity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="flex items-center justify-between">
              <Label htmlFor="push-notif" className="flex flex-col space-y-1">
                <span className="text-lg font-semibold">Push Notifications</span>
                <span className="font-normal text-muted-foreground">
                  Get real-time updates on your device.
                </span>
              </Label>
              <Switch id="push-notif" defaultChecked />
            </div>
             <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="flex flex-col space-y-1">
                <span className="text-lg font-semibold">Marketing Emails</span>
                <span className="font-normal text-muted-foreground">
                  Receive news about rewards and partner brands.
                </span>
              </Label>
              <Switch id="marketing" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
             <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-primary" />
              <CardTitle className="text-2xl font-headline">Security & Privacy</CardTitle>
            </div>
            <CardDescription>
              Keep your transactions and account secure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="2fa" className="flex flex-col space-y-1">
                  <span className="text-lg font-semibold">Two-Factor Authentication</span>
                  <span className="font-normal text-muted-foreground">
                    Add an extra layer of security to your login.
                  </span>
                </Label>
                <Switch id="2fa" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <span className="text-lg font-semibold block">Active Sessions</span>
                   <span className="font-normal text-muted-foreground block">
                    You are currently logged in on 2 devices.
                  </span>
                </div>
                <Button variant="outline" size="sm">Manage Sessions</Button>
              </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20">
          <CardHeader>
             <div className="flex items-center gap-3 text-destructive">
              <Trash2 className="h-7 w-7" />
              <CardTitle className="text-2xl font-headline">Danger Zone</CardTitle>
            </div>
            <CardDescription>
              Irreversible actions for your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <span className="text-lg font-semibold block">Clear Data Cache</span>
                   <span className="font-normal text-muted-foreground block">
                    Remove local cached data to fix synchronization issues.
                  </span>
                </div>
                <Button variant="secondary" onClick={handleClearCache}>Clear Cache</Button>
              </div>
          </CardContent>
          <CardFooter className="border-t bg-destructive/5 px-6 py-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground max-w-sm">
                Deleting your account will permanently remove all your listings, reward history, and Algo balance.
            </p>
            <div className="flex gap-3">
                <Button variant="outline" className="font-semibold">
                    <LogOut className="mr-2 h-4 w-4"/>
                    Logout
                </Button>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700 font-bold">
                    Delete Account
                </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
