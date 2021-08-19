import React from "react";
import {Languages} from "../enums/Languages";

interface LanguageSelectorProps {
    onChange: (language: Languages) => void;
}

export default function LanguageSelector({onChange}: LanguageSelectorProps): JSX.Element {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value as Languages)}>
                <option value={Languages.EN}>English</option>
                <option value={Languages.DE}>German</option>
                <option value={Languages.BG}>Bulgarian</option>
            </select>
        </div>
    );
}