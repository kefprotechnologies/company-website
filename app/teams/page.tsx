import TeamsHero from "@/components/teams/TeamsHero";
import MemberList from "@/components/teams/MemberList";
import TeamsCTA from "@/components/teams/TeamsCTA";

export default function TeamsPage() {
  return (
    <div className="flex flex-col">
      <TeamsHero />
      <MemberList />
      <TeamsCTA />
    </div>
  );
}
