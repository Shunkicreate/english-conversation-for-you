import { FC } from "react";
import '../stylesheets/Recording.css'
type Props = {
  visible: boolean;
  source: string;
};

export const Recording: FC<Props> = ({ visible, source }) => {
  if (!visible) return null;
  return (
    <div>
      <img
        src={source}
        alt="recording gif"
        className="Recording"
      />
    </div>
  );
};
