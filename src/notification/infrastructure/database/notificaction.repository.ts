import { Notification } from './../../domain/entities/notification';
import { db } from "../../../core/config/db";

export class NotificationRepository {
    create = async (data: Notification) => {
        db.notification.create({
            data:{
                message: data.message,
                date: data.date,
                id_user: data.id_user
            }
        })

    }
}