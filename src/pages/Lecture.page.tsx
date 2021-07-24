import { FC, memo } from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Lecture: FC<Props> = (props) => {
  const { LectureNumber, batchNumber } = useParams<any>();

  return (
    <div>
      Showing data of lecture # {LectureNumber} of batch # {batchNumber}
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);
