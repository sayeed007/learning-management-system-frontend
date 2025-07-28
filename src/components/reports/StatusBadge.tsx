import { Badge } from "lucide-react";

export const StatusBadge = ({ status, percentage }: {
    status: string
    percentage?: number
}) => {

    if (status === 'Complete') {
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge>;
    }
    return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">In Progress</Badge>;
}