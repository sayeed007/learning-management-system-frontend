import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
    status: string;
    percentage?: number;
}

export const StatusBadge = ({ status, percentage }: StatusBadgeProps) => {
    switch (status) {
        case 'Complete':
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge>;
        case 'In Progress':
            return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">In Progress</Badge>;
        case 'Yet to Start':
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Yet to Start</Badge>;
        default:
            return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>;
    }
};