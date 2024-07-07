import * as React from 'react';
import NextLink from 'next/link';
import type * as types from 'types';

export type Props = types.Link & types.StackbitFieldPath & { className?: string; sx?: { [key: string]: any } };

export const Link: React.FC<Props> = (props) => {
    const { className, label, url, underline = 'always', color = 'primary', sx, 'data-sb-field-path': fieldPath } = props;
    const annotations = fieldPath ? [fieldPath, `${fieldPath}.url#@href`].join(' ').trim() : null;

    return (
        <NextLink href={url} passHref>
            <a className={className} style={{ textDecoration: underline === 'none' ? 'none' : 'underline' }}>
                <span data-sb-field-path=".label">{label}</span>
            </a>
        </NextLink>
    );
};
