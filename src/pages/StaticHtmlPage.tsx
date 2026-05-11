type StaticHtmlPageProps = {
  title: string;
  srcPath: string;
};

export default function StaticHtmlPage({ title, srcPath }: StaticHtmlPageProps) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        title={title}
        src={srcPath}
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}

