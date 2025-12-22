import { UserCardProps } from "../types";

export default function UserCard({
    name,
    age,
    isActive = true,
}: UserCardProps) {
    return(
        <div className="border rounded">
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Status : {isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}
