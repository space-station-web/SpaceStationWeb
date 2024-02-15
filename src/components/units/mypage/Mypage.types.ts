import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface MyPageProps {
  tabValue: string;
  setTabValue: Dispatch<SetStateAction<string>>;
  tabBarMenu: string[];
  posts: PostProps[];
  questions: QuestionProps[];
  deleteModalOpen: boolean;
  modalType: string;
  storageName: string;
  handleDeleteModal: () => void;
  handleStorageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModalType: (type: string) => void;
  handleNeighborClick: () => void;
  isMine: boolean;
  isFollowing: boolean;
  handleFollowClick: () => void;
}
export interface PostProps {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  self_destructTime?: string;
  visibility: string;
  topic_id: number;
  referencetopic_id?: number;
  user_id: number;
}

export interface QuestionProps {
  question_content: string;
  answer_content: string;
}
