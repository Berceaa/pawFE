import { useI18n, type Language } from '../context/I18nContext';

const languages: { value: Language; label: string }[] = [
  { value: 'ro', label: 'RO' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center rounded-full border border-orange-200 bg-white p-1 shadow-sm">
      {languages.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setLanguage(item.value)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            language === item.value
              ? 'bg-[#f27128] text-white shadow-sm'
              : 'text-slate-600 hover:bg-orange-50'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
