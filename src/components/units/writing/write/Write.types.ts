import type { MouseEvent, ChangeEvent } from "react";

export interface Iwrite {
  temporaryStorageCount: number;
  handleTemporaryStorageClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveHomePage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onImageClick: (event: MouseEvent<HTMLSpanElement>) => void;
  // onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePublishClick: () => void;

  onFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  fileInputRef: React.Ref<HTMLInputElement>;
  isComponentVisible: boolean;
  isAlertVisible: boolean;
  isTempSaveAlertVisible: boolean;

  selectedImages: string[];

  // user_id: number;
  _title: string;
  _content: string;
  // visibility: string;

  // 오늘의 글감
  // topicId: number;
  todayTopic: string;
  todayContent: string;
}