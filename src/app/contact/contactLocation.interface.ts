export interface ContactLocation {
  /** Название города */
  city: string;

  /** Полный адрес */
  address: string;

  /** Дополнительное описание расположения */
  desc: string;

  /** Номер телефона в формате строки */
  phone: string;

  /** Имя пользователя или ссылка в Telegram */
  telegram: string;

  /** Номер WhatsApp в международном формате */
  whatsapp: string;

  /** Географические координаты [широта, долгота] */
  coords: [number, number];
}
