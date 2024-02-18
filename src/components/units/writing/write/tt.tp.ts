import type { ChangeEvent, MouseEvent } from "react";

export interface TableContent {
  title: string;
  content: string;
  visibility: string;
}

export interface Iwrite {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  temporaryStorageCount: number;
  handleTemporaryStorageClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveHomePage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handlePublishClick: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onImageClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  selectedImages: string[];
  result?: {
    topic_id?: number;
    todaytopic?: string;
    content?: string;
    viewed?: number;
    user_id?: number;
  } | undefined;
  
}