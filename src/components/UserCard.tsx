import { UserCardProps } from "../types";

export default function UserCard({
    name,
    age,
    isActive = true,
}: UserCardProps) {
    return(
        <div className="border rounded">
            <h2 className="user-name">Name : {name}</h2>
            <p className="user-age">Age : {age}</p>
            <p className="user-status">Status : {isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}
