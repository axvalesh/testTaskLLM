
export type cards = CardPerson[] | CardText[] | CardBackgroundImageText[] | CardPersonOpinion[]
export type card = CardPerson | CardText | CardBackgroundImageText | CardPersonOpinion

export interface CardPersonOpinion {
    id?: string;
    type?: "personOpinion";
    name: string;
    image: string;
    description: string;
    date: string;
}
export interface CardPerson {
    id?: string;
    type?: "person";
    image: string;
    backgroundColor: string;
    color: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface CardText {
    id?: string;
    type?: "text";
    variant: "yellow" | "blue" | "orange";
    title: string;
    body: string;
}

export interface CardBackgroundImageText {
    id?: string;
    type?: "backgroundImageText";
    image: string;
    color: string;
    title: string;
    body: string;
}