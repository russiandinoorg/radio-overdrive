import { ImageBox } from '@/components/shared/customImg/ImageBox';
import type { MilestoneItem } from '@/types/types';

export const TimelineItem = ({
  isLast,
  milestone,
}: {
  isLast: boolean;
  milestone: MilestoneItem;
}) => {
  const { description, duration, image, tags, title } = milestone;
  const startYear = duration?.start ? new Date(duration.start).getFullYear() : undefined;
  const endYear = duration?.end ? new Date(duration.end).getFullYear() : 'Now';

  return (
    <div>
      <div>
        {/* Thumbnail */}
        <div style={{ width: '65px', height: '65px' }}>
          <ImageBox
            alt={title || 'Timeline item icon'}
            height={65}
            image={image}
            size='10vw'
            width={65}
          />
        </div>
        {/* Vertical line */}
        {!isLast && <div />}
      </div>
      <div>
        {/* Title */}
        <div>{title}</div>
        {/* Tags */}
        <div>
          {tags?.map((tag, key) => (
            <span key={key}>
              {tag}
              <span>●</span>
            </span>
          ))}
          {startYear} - {endYear}
        </div>
        {/* Description */}
        <div>{description}</div>
      </div>
    </div>
  );
};
