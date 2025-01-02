import { Communication } from '../../types';
import { isAfter, isBefore, isToday } from 'date-fns';

type CommunicationStatus = 'overdue' | 'due' | 'completed' | 'upcoming';

export function getCommunicationStatus(communications: Communication[]): CommunicationStatus {
  const now = new Date();
  
  const hasOverdue = communications.some(comm => 
    !comm.completed && isBefore(new Date(comm.date), now) && !isToday(new Date(comm.date))
  );
  
  if (hasOverdue) return 'overdue';
  
  const hasDueToday = communications.some(comm =>
    !comm.completed && isToday(new Date(comm.date))
  );
  
  if (hasDueToday) return 'due';
  
  const hasCompleted = communications.some(comm => comm.completed);
  
  if (hasCompleted) return 'completed';
  
  return 'upcoming';
}