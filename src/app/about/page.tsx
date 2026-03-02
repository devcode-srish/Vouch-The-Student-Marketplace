import { Building, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Srishti Saxena",
    role: "Student",
  },
  {
    name: "Divyansh Kalra",
    role: "Student",
  },
  {
    name: "Shambhavi Jha",
    role: "Student",
  },
  {
    name: "Jaimin",
    role: "Student",
  },
];


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <Building className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-4xl md:text-6xl font-bold font-headline mt-6">About Vouche</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          We're on a mission to make student life easier and more affordable by creating a trusted, community-driven marketplace.
        </p>
      </header>

      <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block bg-primary text-primary-foreground p-3 rounded-lg">
                    <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold font-headline">Our Story</h2>
                <p className="text-muted-foreground text-lg">
                Vouche started as a simple idea in a dorm room: what if there was a safe and easy way for students to buy and sell goods exclusively within their campus community? Frustrated by the unreliability of public forums and the hassle of dealing with strangers, we set out to build a platform that prioritizes trust, convenience, and affordability.
                </p>
                <p className="text-muted-foreground text-lg">
                Today, Vouche is a thriving marketplace connecting thousands of students, helping them save money, reduce waste, and build a stronger campus community. From textbooks and lab coats to furniture and electronics, Vouche is the go-to platform for all student needs.
                </p>
              </div>
               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                 <p className="text-muted-foreground">[Placeholder for a team/campus image]</p>
               </div>
          </div>
      </section>

      <section>
        <div className="text-center mb-12">
            <Users className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold font-headline mt-4">Meet the Team</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                The passionate individuals behind Vouche, dedicated to serving the student community.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map(member => (
                 <Card key={member.name} className="text-center">
                     <CardHeader>
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-primary font-semibold">{member.role}</p>
                     </CardContent>
                 </Card>
            ))}
        </div>
      </section>

    </div>
  );
}
