import { cn } from "@/utilities/ui";

export default function StatCircle({
  stat,
  description,
  className,
}: {
  stat: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[330px] w-[330px] flex-col items-center justify-center space-y-4 rounded-full bg-slate-900",
        className
      )}
    >
      <h3 className="w-[250px] truncate text-center font-heading text-8xl text-slate-50">
        {stat}
      </h3>
      <p className="w-[250px] truncate whitespace-pre-wrap text-center text-slate-50">
        {description}
      </p>
    </div>
  );
}
