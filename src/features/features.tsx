
import { motion } from "framer-motion";
import { features } from "@/data/data";

export default function Features() {
  return (
    <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            rotateX: index % 2 === 0 ? 5 : -5,
            rotateY: index % 3 === 0 ? 5 : -5,
            transition: { duration: 0.3 },
          }}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center gap-3">
            {feature.icon}
            <div className="space-y-2">
              <h3 className="font-bold">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}