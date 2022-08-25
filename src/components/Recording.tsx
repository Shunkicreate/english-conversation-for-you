import { FC } from "react";

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
        style={{ visibility: { visible } ? "visible" : "hidden" }}
      />
    </div>
  );
};
