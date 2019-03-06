
export interface IBroadcastApi {
	// At least elements or block_id property must be set

	to: string[]; // max 1000
	desc?: string;
	message_tag: TFbMessageTag; // A message tag gives you the ability to send messages to a person outside of the 24h window. https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags
	elements?: TElement[]; // max 5
	block_id?: string;
}

/* Elements
	========================================================================== */

export interface IMessage {
	type: 'message';
	text: string; // max 640 characters
	quick_replies?: IQuickReply[]; // max 11
	buttons?: TButton[]; // max 3
}

export interface IPhoto {
	type: 'photo';
	url: string; //
	quick_replies?: IQuickReply[]; // max 11
}

export interface IAudio {
	type: 'audio';
	url: string; // MP3, OGG, WAV audios, max 25MB
	quick_replies?: IQuickReply[]; // max 11
}

export interface IVideo {
	type: 'video';
	url: string;  // MP4 videos, max 25MB.
	quick_replies?: IQuickReply[]; // max 11
}

export interface IFile {
	type: 'file';
	url: string; // any files, max 25MB.
	quick_replies?: IQuickReply[]; // max 11
}

export interface IGallery {
	type: 'gallery';
	elements: Array<{
		// At least one property must be set in addition to title.
		title: string; // max 80 characters
		default_action_url: string // when user click on card
		subtitle?: string; // max 80 characters
		image_url?: string;
		buttons?: TButton[]; // max 3
	}>; // max 10
	quick_replies?: IQuickReply[]; // max 11
}

export type TElement = IMessage | IPhoto | IAudio | IVideo | IFile | IGallery;

/* Buttons
	========================================================================== */

export interface IButtonUrl {
	type: 'url';
	url: string;
	title: string; // max 20 characters
}

export interface IButtonGoTo {
	type: 'go_to';
	title: string; // max 20 characters
	go_to_block: string; // block id
}

export interface IButtonPhoneNumber {
	type: 'phone_number';
	title: string; // max 20 characters
	prefix: string; // country code with '+' e.g. +48
	number: number;
}

export type TButton = IButtonUrl | IButtonGoTo | IButtonPhoneNumber;

/* Quick Replies
	========================================================================== */

interface IQuickReply {
	title: string; // max 20 characters
	go_to_block: string; // block id
}

export type TFbMessageTag = 'COMMUNITY_ALERT' | 'CONFIRMED_EVENT_REMINDER' | 'NON_PROMOTIONAL_SUBSCRIPTION' | 'PAIRING_UPDATE' | 'APPLICATION_UPDATE' | 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'GAME_EVENT' | 'TRANSPORTATION_UPDATE' | 'FEATURE_FUNCTIONALITY_UPDATE' | 'TICKET_UPDATE';
