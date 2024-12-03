export interface Payment {
  id: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  id_person: number;
  id_client: number;
}
