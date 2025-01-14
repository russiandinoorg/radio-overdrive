import { TimelineItem } from '@/components/shared/customText/TimelineItem';
import type { MilestoneItem } from '@/types/types';

interface TimelineItem {
  title: string;
  milestones: MilestoneItem[];
}

export const TimelineSection = ({ timelines }: { timelines: TimelineItem[] }) => (
  <div>
    {timelines?.map((timeline, key) => {
      const { title, milestones } = timeline;
      return (
        <div key={key}>
          <div>{title}</div>

          {milestones?.map((experience, index) => (
            <div key={index}>
              <TimelineItem isLast={milestones.length - 1 === index} milestone={experience} />
            </div>
          ))}
        </div>
      );
    })}
  </div>
);
