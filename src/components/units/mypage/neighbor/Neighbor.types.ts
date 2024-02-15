export interface NeighborItemProps {
  id: number;
  user_id: number;
  follow_id: number;
}

export interface NeighborUIprops {
  neighborList: NeighborItemProps[];
}
