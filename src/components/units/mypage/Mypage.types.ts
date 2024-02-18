import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface MyPageProps {
  tabValue: string;
  setTabValue: Dispatch<SetStateAction<string>>;
  tabBarMenu: string[];
  posts: PostProps[];
  handlePostClick: (id: number) => void;
  questions: QuestionProps[];
  storages: StorageProps[];
  storedPosts: { name: string; list: PostProps[]; id: number } | undefined;
  deleteModalOpen: boolean;
  modalType: string;
  storageName: string;
  addStorageItem: () => void;
  deleteStorageItem: () => void;
  handleDeleteModal: () => void;
  handleStorageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModalType: (type: string) => void;
  handleNeighborClick: () => void;
  handleStorageSelect: (id: number, purpose: "delete" | "open") => void;
  handleFollowClick: () => void;
  handleBackClick: () => void;
  isMine: boolean;
  isFollowing: boolean;
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

export interface StorageProps {
  storage_type_id: number;
  type: string;
  user_id: number;
}
