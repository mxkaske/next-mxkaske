import Stack from "@/components/home/stack";
import techConfig from "@/config/tech";

const TechStack = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-16">
      {Object.keys(techConfig).map((key) => (
        <Stack key={key} {...techConfig[key]} />
      ))}
    </div>
  );
};

export default TechStack;
