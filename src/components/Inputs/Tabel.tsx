import type { TabelProps } from '../../types';

const Tabel = ({className, children}: TabelProps) => {
    return (
          <table className={className}>{children}</table>

    );
};

export default Tabel;
