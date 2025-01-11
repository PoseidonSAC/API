export interface BoxesDto {
  color: string;
  name: string;
  quantity: number;
  reported_by: string;
  id_control_boxes: number;
  hasLiquid: boolean;
  createdAt: Date;
}

export interface BoxesResDto {
  id: number;
  color: string;
  name: string;
  reported_by: string;
  quantity: number;
  id_control_boxes: number;
  hasLiquid: boolean;
  createdAt: Date;
}
