export type Gift = {
    id: string;
    title: string;
    description: string;
    price: string;
    photo: string;
};

export type GiftTemplate = Pick<Gift, 'title' | 'description' | 'photo' | 'price'>;

type BaseBadge = {
    id: string;
    color: 'classic-rose' | 'biloba-flower' | 'sulu';
    view: 'default' | 'compact';
    onClick?: EventListener;
};

export type ActionBadge = BaseBadge & {
    type: 'action';
};

export type CardBadge = BaseBadge & {
    type: 'card';
    title: string;
    count: number;
};

export type Badge = ActionBadge | CardBadge;
