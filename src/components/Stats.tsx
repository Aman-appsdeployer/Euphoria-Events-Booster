import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 2, suffix: '+', label: 'Years of Experience' },
  { value: 0.5, suffix: 'K+', label: 'Events Covered' },
  { value: 1.0, suffix: 'K+', label: 'Satisfied Clients' },
  { value: 4.8, suffix: '', label: 'Customer Rating' },
];

const CountUp = ({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(end * progress * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="stat-number">
      {count.toFixed(count % 1 !== 0 ? 1 : 0)}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
