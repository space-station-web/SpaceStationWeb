export interface NeighborItemProps {
  id: number;
  user_id: number;
  nickname: string;
  follow_id: number;
  follow_nickname: string;
}

export interface NeighborUIprops {
  neighborList: NeighborItemProps[];
  myFollowList: number[];
  changeFollow: (id: number) => void;
  handleClickBack: () => void;
}
