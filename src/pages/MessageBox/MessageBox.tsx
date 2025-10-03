import Typography from '@mui/material/Typography';
import React from 'react';

type Message = {
  id: string | number;
  time: string;     
  date: string;      
  text: string;
  kind: 'success' | 'info' | 'error';
};

type MessageBoxProps = {
  items?: Message[];
  title?: string;
};

const DEFAULT_MESSAGES: Message[] = [
  { id: 1, time: '12:20', date: '1404/09/08', text: 'قیمت طلا 24 درصد افزایش پیدا کرد', kind: 'success' },
  { id: 2, time: '12:20', date: '1404/09/08', text: 'قیمت طلا 5 درصد افزایش پیدا کرد',  kind: 'info' },
  { id: 3, time: '12:20', date: '1404/09/08', text: 'قیمت طلا 24 درصد افزایش پیدا کرد', kind: 'error' },
];

const DOT_BY_KIND: Record<Message['kind'], string> = {
  success: 'bg-green-400',
  info: 'bg-primary-blue dark:bg-accent-orange',
  error: 'bg-red-400',
};

function MessageItem({ message }: { message: Message }) {
  return (
    <li className="flex items-center gap-3 py-3">
      <span
        className={`w-3 h-3 rounded-full ${DOT_BY_KIND[message.kind]}`}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1">
        <Typography className="dark:text-gray-300 text-gray-700 !font-peyda" fontSize={10}>
          <span className="pr-1">{message.time}</span>
          {message.date}
        </Typography>
        <Typography
          className="dark:text-text-color text-light-text-color !font-peyda"
          fontSize={14}
          fontWeight={500}
        >
          {message.text}
        </Typography>
      </div>
    </li>
  );
}

const MessageBox: React.FC<MessageBoxProps> = ({
  items = DEFAULT_MESSAGES,
  title = 'صندوق پیام‌ها',
}) => {
  return (
    <main className="flex-1">
      <section className="container mx-auto mb-3">
        <div className="rounded-lg shadow-lg dark:bg-black bg-light-primary-darker p-4">
          <Typography
            className="!font-alibaba dark:text-text-color text-light-text-color"
            fontWeight="bold"
            fontSize={16}
          >
            {title}
          </Typography>

          <ul className="mt-4 divide-y divide-primary-lighter">
            {items.map((m) => (
              <MessageItem key={m.id} message={m} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MessageBox;
